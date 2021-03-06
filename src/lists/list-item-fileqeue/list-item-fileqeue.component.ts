import { Action } from './../../action';
import {
    Component,
    OnInit,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'as-list-item-fileqeue',
    templateUrl: 'list-item-fileqeue.component.html'
})
export class ListItemFileQeueComponent {
    @Input('index') public index: string;
    @Input('hasLine') public hasLine: boolean;
    @Input('data') public data: any;
    @Input('actions') public actions: [Action];
    @Input('customClass') public customClass: string;
    @Output() public onSelected = new EventEmitter<any>();
    @Output() public onClicked = new EventEmitter<any>();
    public isChecked = false;
    /**
     * select
     */
    public select() {
        this.onSelected.emit(this.index);
        this.isChecked = !this.isChecked;
    }
    /**
     * click
     */
    public click() {
        this.onClicked.emit(this.index);
    }
    /**
     * actionCallback
     */
    public actionCallback(action: Action) {
        action.active = !action.active;
        action.callback()
    }
    /**
     * checkFileType
     */
    public checkFileType(file) {
        if (file) {
          let type = file.type.split('/')[0];
          return type;
        }
      }
      /**
       * checkMimeType
       */
      public checkMimeType(file) {
        if (file) {
          let mime = file.type.split('/')[1];
          return mime;
        }
      }
}
