import axios from 'axios';
import { ref } from 'vue';

export default function useUrlLoader<T>(url: string) {
  const result = ref<T | null>(null);
  const loading = ref(true);
  const loaded = ref(false);
  const error = ref(null);

  axios.get(url).then((res) => {
    loading.value = false;
    loaded.value = true;
    result.value = res.data;
  }).catch((e) => {
    loading.value = false;
    error.value = e;
  });

  return {
    result,
    loading,
    loaded,
    error,
  };
}
