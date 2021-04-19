import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/languages/', '.json');
}

const translationOptions = {
    loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
    },
};

@NgModule({
    imports: [TranslateModule.forRoot(translationOptions)],
    exports: [TranslateModule],
    providers: [TranslateService],
})
export class AppTranslationModule {
    constructor(translate: TranslateService) {
        translate.addLangs(['hr','en']);
        translate.setDefaultLang('hr');
        translate.use('hr');
    }
}
