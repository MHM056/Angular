import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { AddThemeComponent } from "./add-theme/add-theme.component";
import { CurrentThemeComponent } from "./current-theme/current-theme.component";

const routes: Routes = [{ path: 'themes', component: MainComponent,},
    { path: 'add-theme', component: AddThemeComponent},
    { path: 'themes/:themeId', component: CurrentThemeComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ThemeRoutingModule {}