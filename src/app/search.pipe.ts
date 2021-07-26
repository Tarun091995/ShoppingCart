import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'Search'
})
export class SearchPipe implements PipeTransform {

    // transform(productsArray, searchTerm: string) {
        
    //     searchTerm = searchTerm ? searchTerm.toLowerCase() : null;

    //     // if (sortBy) {
    //     //     sortyBy = sortyBy.toLowerCase()
    //     // } else {
    //     //     sortyBy = null
    //     // }

    //     return searchTerm ? productsArray.filter ((product) => {
    //        return product.name.toLocaleLowerCase().indexOf(searchTerm) !== -1
    //     }) : productsArray;
    // }

    transform( products, searchTerm ) {

        if(searchTerm == '') {
            return products;
        } else {
            searchTerm = searchTerm.toLowerCase();
            let searchResults = [];

            products.forEach((product) => {
                if(product.name.toLocaleLowerCase().indexOf(searchTerm) > -1 ) {
                    searchResults.push(product)
                }
            });

            return searchResults;
        }

    }

}
