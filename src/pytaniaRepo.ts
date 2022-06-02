import { Pytanie } from "./pytanie";
export const PYTANIA:Pytanie[]=[
    {
        id:1,
        tresc:"Wskaż protokół do przesyłania plików",
        odpowiedzi:['ftp','imap','pop3'],
        poprawna:0,
        udzielona:-1
    },
    {
        id:2,
        tresc:"Wskaż protokół do poczty elektronicznej",
        odpowiedzi:['http','pop3','ssh','ftp'],
        poprawna:1,
        udzielona:-1
    },
    {
        id:3,
        tresc:"Wskaż protokół  z szyfrowaniem",
        odpowiedzi:['http','https','ftp'],
        poprawna:2,
        udzielona:-1
    }
]