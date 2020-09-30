import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {EditComponent} from './edit/edit.component';
import {ListComponent} from './list/list.component';

// @ts-ignore
const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'listProduct',
    component: ListComponent,
    children: [{
      path: ':id',
      component: EditComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

/*
// {
//   path: ':key',
//   component: DictionaryComponent,
//   children: [{
//     path: ':key',
//     component: DictionaryDetailComponent,
//   }]
// },*/
