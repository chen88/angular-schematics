import { Component, OnInit } from '@angular/core'
import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service'

@Component({
  selector: '<%= dasherize(name) %>',
  template: require('./<%= dasherize(name) %>.component.pug'),
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  providers: [<%= classify(name) %>Service]
})
export class <%= classify(name) %>Component implements OnInit {
  constructor (private <%= camelize(name) %>Service: <%= classify(name) %>Service) {}
  ngOnInit () {}
}
