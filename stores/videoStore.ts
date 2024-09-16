// stores/videos.ts
import { defineStore } from 'pinia'
import { useVideos } from '@/composables/useVideos';
import type { Video } from '@/types';

export const useVideoStore = defineStore('videoStore', {
  state: (): { video: Video | null, videos: Video[] } => { 
    return {
      video: null,
      videos: []
    };
  },
  getters: {
    getVideos: (state) => state.videos,
    getVideo: (state) => state.video,
  },
  actions: {
    async fetchVideos() {
      try {
        const { data } = await useVideos();
        if (data.value) {
          this.videos = data.value as Video[];        
        }
        return this.videos
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    },
    setVideoById(id: Number) {    
      
      const video = this.videos.find((video) => video.id === id);      
      if (video) {        
        this.video = video;
      }
    },
    setVideo(video: Video) {      
      this.video = video;
    },
    setVideos(videos: Video[]) {
      this.videos = videos;
    },
    resetVideo() {
      this.video = null;
    },
    resetVideos() {
      this.videos = [];
    },
    
  },
});
