import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationData } from '../../providers/translation-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private textForTranslation:String = '';
  private translationFrom:String = '';
  private translationTo:String = '';

  private cardContent:String = '';
  private cardContent2:String = '';




  constructor(public navCtrl: NavController, private translation: TranslationData) {

  }

  /**
   * user input
   * @param tText
   * 
   * 
   */


  public translateClick(tText:String,tFrom:String,tTo:String){
    this.textForTranslation = tText;
    this.translationFrom = tFrom;
    this.translationTo = tTo;

    //console.log('home:'+tFrom+'|'+tTo);
    console.log(this.textForTranslation);

    // pass text for translation to translation service
    this.translation.getTranslation(this.textForTranslation,this.translationFrom,this.translationTo).subscribe( 
     // 1 parametr - uspech
      (result) => 
    {

      this.cardContent = result.responseData.translatedText;
      this.cardContent2 += 'Text: ' + this.textForTranslation+ ' Překlad: ' + result.responseData.translatedText;
    
      console.log(result);
    },

    // 2 parameter - chyba
    (error) => {
      console.log(error);
    },

    //3 parameter - hotovo
    () => {
      console.log('Transfer je OK.');
   } 
  
  );
  }

}
