export {};

declare global{

    namespace NodeJS{
        interface ProcessEnv {
            NEXTAUTH_URL: string;
            FAKE_URL: string;
        }
    }


}
