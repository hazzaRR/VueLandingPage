<template>
    <div ref="embedContainer">
      <!-- Instagram embed container -->
      <blockquote 
        class="instagram-media" 
        data-instgrm-captioned 
        :data-instgrm-permalink="embedUrl" 
        data-instgrm-version="14"
      >
      </blockquote>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, watch } from 'vue';
  
  // Props: pass the Instagram URL
  const { embedUrl } = defineProps({
    embedUrl: {
      type: String,
      required: true
    }
  });
  
  const embedContainer = ref(null);
  
  const loadInstagramEmbed = () => {
    if (typeof window.instgrm !== 'undefined') {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = 'https://www.instagram.com/embed.js';
      script.onload = () => {
        window.instgrm.Embeds.process();
      };
      document.body.appendChild(script);
    }
  };
  
  onMounted(() => {
    loadInstagramEmbed();
  });
  
  // Re-process if the embed URL changes
  watch(() => embedUrl, () => {
    loadInstagramEmbed();
  });
  </script>
  
  <style scoped>
  /* Optional styling for the container */
  .embed-container {
    max-width: 500px;
    max-height: 150px;
    margin: auto;
  }

  /* Make the iframe fit the container */
.instagram-media {
  width: 100% !important;
  height: 100% !important;
}

iframe {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover; /* Ensure the content adapts proportionally */
}
  </style>
  