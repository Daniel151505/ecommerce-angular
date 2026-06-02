import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog-filters.html'
})
export class CatalogFiltersComponent {
  @Input() set searchQuery(value: string) {
    this.searchQuerySignal.set(value || '');
  }
  @Input() set selectedSubcategories(value: number[]) {
    this.selectedSubcategoriesSignal.set([...value || []]);
  }
  @Input() set selectedPresentations(value: string[]) {
    this.selectedPresentationsSignal.set([...value || []]);
  }
  @Input() set selectedBrands(value: string[]) {
    this.selectedBrandsSignal.set([...value || []]);
  }
  @Input() presentations: { label: string; value: string }[] = [];
  @Input() brands: string[] = [];
  @Input() subcategories: { id: number; name: string; count: number }[] = [];

  @Output() clearFilters = new EventEmitter<void>();
  @Output() clearSearch = new EventEmitter<void>();
  @Output() filtersChange = new EventEmitter<{
    searchQuery: string;
    selectedSubcategories: number[];
    selectedPresentations: string[];
    selectedBrands: string[];
  }>();

  public searchQuerySignal = signal<string>('');
  public selectedSubcategoriesSignal = signal<number[]>([]);
  public selectedPresentationsSignal = signal<string[]>([]);
  public selectedBrandsSignal = signal<string[]>([]);

  public toggleSubcategory(subId: number) {
    const current = this.selectedSubcategoriesSignal();
    if (current.includes(subId)) {
      this.selectedSubcategoriesSignal.set(current.filter(id => id !== subId));
    } else {
      this.selectedSubcategoriesSignal.set([...current, subId]);
    }
    this.emitFilters();
  }

  public togglePresentation(pres: string) {
    const current = this.selectedPresentationsSignal();
    if (current.includes(pres)) {
      this.selectedPresentationsSignal.set(current.filter(item => item !== pres));
    } else {
      this.selectedPresentationsSignal.set([...current, pres]);
    }
    this.emitFilters();
  }

  public toggleBrand(brand: string) {
    const current = this.selectedBrandsSignal();
    if (current.includes(brand)) {
      this.selectedBrandsSignal.set(current.filter(item => item !== brand));
    } else {
      this.selectedBrandsSignal.set([...current, brand]);
    }
    this.emitFilters();
  }

  public clearFiltersHandler() {
    this.selectedBrandsSignal.set([]);
    this.selectedPresentationsSignal.set([]);
    this.selectedSubcategoriesSignal.set([]);
    this.emitFilters();
    this.clearFilters.emit();
  }

  public clearSearchHandler() {
    this.searchQuerySignal.set('');
    this.emitFilters();
    this.clearSearch.emit();
  }

  private emitFilters() {
    this.filtersChange.emit({
      searchQuery: this.searchQuerySignal(),
      selectedSubcategories: [...this.selectedSubcategoriesSignal()],
      selectedPresentations: [...this.selectedPresentationsSignal()],
      selectedBrands: [...this.selectedBrandsSignal()]
    });
  }
}
