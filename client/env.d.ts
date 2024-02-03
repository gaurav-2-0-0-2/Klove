export {};

declare global{

    namespace NodeJS{
        interface ProcessEnv {
            NEXTAUTH_URL: string;
        }
    }


}
