import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    @Output() featureSelect = new EventEmitter<string>();
    collapsed = true;
    onSelect(feature: string){
        this.featureSelect.emit(feature);
    }
}