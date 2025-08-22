import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lbenneamcdqrusqrtcpm.supabase.co';
const supabaseKey = 'your_actual_supabase_key_here';

const supabase = createClient(supabaseUrl, supabaseKey);

console.log('Supabase client created:', !!supabase);

Bearer <eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QtdXNlci1pZCIsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsImlhdCI6MTc1NDY0MzYxOSwiZXhwIjoxNzU0NjQ0NTE5fQ.SuIBP9NnTBrw7gd79d0FbqgQYwzJ6Kc9-YCuskjtD-M>