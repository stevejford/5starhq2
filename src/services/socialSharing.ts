import { supabase } from '../lib/supabaseClient';

export interface SocialSharingSettings {
  brandColor: string;
  backgroundColor: string;
  postTemplate: string;
  hideReviewerData: boolean;
  facebookConnected: boolean;
  instagramConnected: boolean;
}

export async function getSocialSharingSettings() {
  const { data, error } = await supabase
    .from('settings')
    .select('*')
    .eq('type', 'social_sharing')
    .single();

  if (error) throw error;
  return data as SocialSharingSettings;
}

export async function updateSocialSharingSettings(settings: Partial<SocialSharingSettings>) {
  const { data, error } = await supabase
    .from('settings')
    .update(settings)
    .eq('type', 'social_sharing')
    .select()
    .single();

  if (error) throw error;
  return data as SocialSharingSettings;
}

export async function connectFacebook() {
  // Implement Facebook OAuth connection
  // This would typically involve redirecting to Facebook's OAuth flow
  // and handling the callback
}

export async function connectInstagram() {
  // Implement Instagram OAuth connection
  // This would typically involve redirecting to Instagram's OAuth flow
  // and handling the callback
}

export async function disconnectSocialMedia(platform: 'facebook' | 'instagram') {
  const { error } = await supabase
    .from('settings')
    .update({
      [`${platform}Connected`]: false
    })
    .eq('type', 'social_sharing');

  if (error) throw error;
}
