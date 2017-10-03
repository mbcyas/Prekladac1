import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationData } from '../../providers/translation-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private textForTranslation:String = '';
  private cardContent:String = '';

  constructor(public navCtrl: NavController, private translation: TranslationData) {

  }

  /**
   * gets the user input and triggers translation
   * @param tText 
   */
  public translateClick(tText:String){
    this.textForTranslation = tText;

    console.log(this.textForTranslation);

    // pass text for translation to translation service
    this.translation.getTranslation(this.textForTranslation).subscribe( (result) => {
      this.cardContent = result.responseData.translatedText;
    });
  }

}
