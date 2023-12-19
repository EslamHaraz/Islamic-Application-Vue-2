import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuaranView from "../views/QuaranOptionView.vue";
import QuaranWritten from "../views/QuaranWrittenView.vue";
import RecitersView from "../views/RecitersView.vue";
import QuaranAudioView from "../views/QuaranAudioView.vue";
import PrayerTimesView from "../views/PrayerTimesView.vue";
import AhadithsCategoriesView from "../views/AhadithsCategoriesView.vue";
import AhadithView from "../views/AhadithView.vue";
import BooksCategoriesView from "../views/BooksCategoriesView.vue";
import SubCategoryBooksView from "../views/SubCategoryBooksView.vue";
import BooksView from "../views/BooksView.vue";
import SurahWrittenComponent from "@/components/SurahWrittenComponent.vue";
import SurahAudioComponent from "@/components/SurahAudioComponent.vue";
import HadithComponent from "@/components/HadithComponent.vue";
import CategoriesOfDhikr from "@/views/CategoriesOfDhikr.vue";
import AdkharView from "@/views/AdkharView.vue";
import PrayerView from "@/views/PrayerView.vue";
import DeveloperView from "@/views/DeveloperView.vue";
import WebsiteLayout from "@/layout/WebsiteLayout.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "WebsiteLayout",
    component: WebsiteLayout,
    children: [
      {
        path: "home",
        name: "HomeView",
        component: HomeView,
      },
      {
        path: "Quaran-Kareem",
        name: "QuaranView",
        component: QuaranView,
      },
      {
        path: "Quaran-Written",
        name: "QuaranWritten",
        component: QuaranWritten,
      },
      {
        path: "Surah/:surahId",
        name: "SurahWrittenComponent",
        component: SurahWrittenComponent,
      },
      {
        path: "SurahAudio/:surahNumber",
        name: "SurahAudioComponent",
        component: SurahAudioComponent,
      },
      {
        path: "Reciters",
        name: "RecitersView",
        component: RecitersView,
      },
      {
        path: "Quaran-Audio",
        name: "QuaranAudioView",
        component: QuaranAudioView,
      },
      {
        path: "islamic-Prayers",
        name: "PrayerTimesView",
        component: PrayerTimesView,
      },
      {
        path: "AhadithsCategries",
        name: "AhadithsCategoriesView",
        component: AhadithsCategoriesView,
      },
      {
        path: "Ahadith/:catId",
        name: "AhadithView",
        component: AhadithView,
      },
      {
        path: "Hadith/:hadithId",
        name: "HadithComponent",
        component: HadithComponent,
      },
      {
        path: "BooksCategories",
        name: "BooksCategoriesView",
        component: BooksCategoriesView,
      },
      {
        path: "Sup-Category/:catId",
        name: "SubCategoryBooksView",
        component: SubCategoryBooksView,
      },
      {
        path: "BooksView/:booksId",
        name: "BooksView",
        component: BooksView,
      },
      {
        path: "CategoriesOfDhikr",
        name: "CategoriesOfDhikr",
        component: CategoriesOfDhikr,
      },
      {
        path: "Adkhar/:adkarIndex",
        name: "AdkharView",
        component: AdkharView,
      },
      {
        path: "Prayers",
        name: "PrayerView",
        component: PrayerView,
      },
      {
        path: "Developer",
        name: "DeveloperView",
        component: DeveloperView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
