
import { map, startWith } from 'rxjs/operators';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { StoreService } from '../../../../shared/service/store.service';
import { Store } from '../../../../shared/model/store.model';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-autocomplete-Store',
    templateUrl: './autocomplete-Store.component.html'
})
export class AutocompleteStoreComponent implements OnInit {
    @Input() title: string;
    @Input() placeholder: string;
    @Input() positions: string[];
    @Input() percent: boolean;
    @Input() onOtherStore = false;
    @Input() _selectedStore: Store;

    private store: Store[] = [];
    public filteredStore: Observable<Store[]>;
    public myControl = new FormControl();
    public otherStore: { storeId: '' };
    public loading = true;
    constructor(
        private storeService: StoreService,
    ) { }

    @Output()
    selectedStoreChange = new EventEmitter<Store>();

    @Input('selectedStore')
    set setSelectedStore(store) {
        if (store === undefined) {
            this._selectedStore = null;
        } else {
            this._selectedStore = store || [];
        }
    }
    get selectedStore() {
        return this._selectedStore;
    }

    ngOnInit() {
        this.storeService.getAllStore().subscribe((store: Store[]) => {
            this.store = store;
            this.loading = false;
        });
        this.filteredStore = this.myControl.valueChanges.pipe(
            startWith(null),
            map(value => value && value instanceof Store ? value.materialId : value),
            map(value => value ? this.filter(value) : this.store.slice()), );
    }
    filter(name: string): Store[] {
        return this.store.filter(store => store.materialId.indexOf(name) !== -1 ||
        store.materialName.indexOf(name) !== -1 || !name);
    }
    displayFn(store: Store): string {
        return store ? `${store.materialId} ${store.materialName}` : '';
    }
    addSelectStore(store: Store) {
        this.selectedStoreChange.emit(store);
    }
}
