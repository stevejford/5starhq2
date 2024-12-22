import { supabase } from '../config/supabase';

export interface BusinessUser {
  id: string;
  name: string;
  email: string;
  location: string;
  role: string;
  created_at: string;
}

export const getBusinessUsers = async () => {
  const { data, error } = await supabase
    .from('business_users')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data;
};

export const addBusinessUser = async (user: Omit<BusinessUser, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('business_users')
    .insert([user])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const updateBusinessUser = async (id: string, updates: Partial<BusinessUser>) => {
  const { data, error } = await supabase
    .from('business_users')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const deleteBusinessUser = async (id: string) => {
  const { error } = await supabase
    .from('business_users')
    .delete()
    .eq('id', id);

  if (error) {
    throw error;
  }
};
