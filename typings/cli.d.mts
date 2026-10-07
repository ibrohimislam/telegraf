#!/usr/bin/env node
export type Expand<T> = T extends object ? T extends infer O ? {
    [K in keyof O]: O[K];
} : never : T;
type Env = {
    BOT_TOKEN?: string;
    BOT_DOMAIN?: string;
    PORT?: string;
};
/**
 * Runs the cli program and returns exit code
 */
export declare function main(argv: string[], env?: Env): Promise<0 | 1 | 2 | 3>;
export {};
//# sourceMappingURL=cli.d.mts.map