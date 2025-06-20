import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CartService } from '../../../services/cart.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

    category!: string;
    menuOpen = false;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private cartService: CartService,
    ) { }

    ngOnInit(): void {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                const route = this.getDeepestChild(this.route);
                route.paramMap.subscribe(params => {
                    this.category = params.get('category') || '';
                    this.menuOpen = false;
                });
            });
    }

    private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
        while (route.firstChild) {
            route = route.firstChild;
        }
        return route;
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    openCart() {
        this.cartService.openCart();
    }
}