declare module "configure" {
    export class Configure {
        environment: string;
        environments: any;
        directory: string;
        config_file: string;
        cascade_mode: boolean;
        private _config_object;
        private _config_merge_object;
        constructor();
        setDirectory(path: any): void;
        setConfig(name: any): void;
        setEnvironment(environment: any): void;
        setEnvironments(environments?: boolean): void;
        setCascadeMode(bool?: boolean): void;
        readonly obj: any;
        readonly config: string;
        is(environment: any): boolean;
        check(): void;
        environmentEnabled(): boolean;
        environmentExists(): boolean;
        get(key: any, defaultValue?: any): any;
        set(key: any, val: any): void;
        merge(obj: any): void;
        lazyMerge(obj: any): void;
        setAll(obj: any): void;
        getAll(): any;
        loadConfig(): Promise<void>;
        loadConfigFile(path: any, action: any): Promise<{}>;
        mergeConfigFile(path: any): Promise<{}>;
    }
}
declare module "index" {
    import { Configure } from "configure";
    export function configure(aurelia: any, configCallback: any): any;
    export { Configure };
}
