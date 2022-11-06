<template>
    <div style="padding-top: 10px; width: 600px; margin: auto">
      <div v-for="(yearList,idx) in data" class="yearItem" :key="idx">
        <div class="year">
          {{ yearList[0].year }}
        </div>
        <a
          :href="withBase(article.path)"
          v-for="(article, index) in yearList"
          :key="index"
          class="article"
        >
          <div class="contain">
            <div class="title">
              {{ article.title }}
            </div>
            <div class="date">{{ article.updateDate }}</div>
          </div>
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useData, withBase } from "vitepress";
  import { computed } from "vue";
  import { useYearSort } from "../utils.js";
  const { theme } = useData();
  const data = computed(() => useYearSort(theme.value.allArticles));
  </script>
  
  <style scoped>
  .yearItem {
    border-bottom: 1px dashed #c7c7c7;
  }
  .yearItem:last-child {
    border: none;
  }
  .year {
    padding: 16px 0 8px 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  .article {
    padding-bottom: 0.2rem;
    position: relative;
  }
  .contain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem;
    color: #666;
    font-size: 1rem;
    transition: all 0.5s ease;
  }
  .contain:hover {
    text-decoration: none;
    color: #5cda79;
    line-height: 2em;
    font-size: 1.2rem;
  }
  
  .contain::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #5cda79;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      -moz-transform: scaleX(0);
      -ms-transform: scaleX(0);
      -o-transform: scaleX(0);
      transform: scaleX(0);
      transition-duration: .4s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
  }
  .contain:hover::before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      -moz-transform: scaleX(1);
      -ms-transform: scaleX(1);
      -o-transform: scaleX(1);
      transform: scaleX(1)
  }
  
  .date {
    font-family: Georgia, sans-serif;
  }
  </style>