import { Component, OnInit } from '@angular/core'
import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service'

@Component({
  selector: '<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.pug',
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
})
export class <%= classify(name) %>Component implements OnInit {
  constructor (private <%= camelize(name) %>Service: <%= classify(name) %>Service) {}
  ngOnInit () {}
}
