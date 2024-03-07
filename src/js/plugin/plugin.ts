import { App } from 'vue';
import { Splide, SplideSlide } from '../components';


export const VueSplide = {
  install( app: App ): void {
    app.component( Splide.name as string, Splide );
    app.component( SplideSlide.name as string, SplideSlide );
  },
};
