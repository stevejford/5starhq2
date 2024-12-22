import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'

const GOOGLE_MAPS_API_KEY = Deno.env.get('GOOGLE_MAPS_API_KEY')

interface AutocompleteRequest {
  input: string;
  types?: string[];
}

interface PlaceDetailsRequest {
  placeId: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { path, data } = await req.json()

    switch (path) {
      case 'autocomplete':
        return handleAutocomplete(data as AutocompleteRequest)
      case 'placeDetails':
        return handlePlaceDetails(data as PlaceDetailsRequest)
      default:
        return new Response(JSON.stringify({ error: 'Invalid path' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        })
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})

async function handleAutocomplete(data: AutocompleteRequest) {
  const { input, types = ['establishment'] } = data
  const params = new URLSearchParams({
    input,
    types: types.join('|'),
    key: GOOGLE_MAPS_API_KEY!
  })

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?${params}`
  )
  const result = await response.json()

  return new Response(JSON.stringify(result), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  })
}

async function handlePlaceDetails(data: PlaceDetailsRequest) {
  const { placeId } = data
  const params = new URLSearchParams({
    place_id: placeId,
    fields: 'name,formatted_address,geometry,place_id',
    key: GOOGLE_MAPS_API_KEY!
  })

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?${params}`
  )
  const result = await response.json()

  return new Response(JSON.stringify(result), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  })
}
