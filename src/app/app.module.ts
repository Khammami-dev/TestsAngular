import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FilsComponent } from './fils/fils.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './PlatfRecrutement/item/item.component';
import { ListeComponent } from './PlatfRecrutement/liste/liste.component';
import { DetailComponent } from './PlatfRecrutement/detail/detail.component';
import { CvComponent } from './PlatfRecrutement/cv/cv.component';
import { StyleComponent } from './directive/style/style.component';
import { MiniWordComponent } from './directive/mini-word/mini-word.component';
import { ClasseComponent } from './directive/classe/classe.component';
import { EmbaucheComponent } from './PlatfRecrutement/embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { AddcvComponent } from './PlatfRecrutement/addcv/addcv.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FilsComponent,
    ItemComponent,
    ListeComponent,
    DetailComponent,
    CvComponent,
    StyleComponent,
    MiniWordComponent,
    ClasseComponent,
    EmbaucheComponent,
    HeaderComponent,
    AddcvComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
