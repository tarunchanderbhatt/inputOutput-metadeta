import { Component, HostListener, ViewEncapsulation } from '@angular/core';


@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces:true,
  encapsulation:ViewEncapsulation.None
  //viewProviders:[myprovider,myprovider1]

})
export class AppComponent {
  title = 'Sahosoft Solutions !';
  city="Delhi";
  cdata:any;
 
}
