import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategorieService } from './categorie.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { DeleteCategorieComponent } from './delete-categorie/delete-categorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateCategorieComponent,
    UpdateCategorieComponent,
    DeleteCategorieComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule
  ],
  providers: [CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
