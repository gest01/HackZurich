import { InjectionToken } from "@angular/core";

export interface IAppConfig {
    apiEndpoint: string;
}

export let APP_CONFIG  = new InjectionToken<IAppConfig>("config");
export const AppConfig: IAppConfig = {
    apiEndpoint: readSetting("apiEndpoint", "localhost:8080/api"),
};

function readSetting(key: string, defaultValue: string): string {
    const placeHolder = "__" + key + "__";
    const meta = document.querySelector("meta[name='" + key + "']");
    const content = meta.getAttribute("content");
    if (content === null || content === undefined || content === "" || content === placeHolder) {
        return defaultValue;
    }

    return content;
}
