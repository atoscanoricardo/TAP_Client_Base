// server/api/videos.ts
const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
    console.log(runtimeConfig.public.API_BASE)
    const response = await $fetch(`${ runtimeConfig.public.API_BASE }/videos`);
    return response;
});
  