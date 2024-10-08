import { IFrequency } from "@/types/type"

export const monitors: string[] = ['HTTP/HTTPS', 'TCP', 'MONGODB', 'REDIS', 'SSL/TLS'];
export const HTTP_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD']
export const EXCLUDED_HTTP_METHODS = ['POST', 'PUT', 'PATCH']
export const FREQUENCIES: IFrequency[] = [
    {
        name: '10 sec',
        value: 10
    },
    {
        name: '30 sec',
        value: 30
    },
    {
        name: '1 min',
        value: 60
    },
    {
        name: '5 mins',
        value: 300
    },
    {
        name: '15 mins',
        value: 900
    },
    {
        name: '30 mins',
        value: 1800
    },
    {
        name: '1 hour',
        value: 3600
    },
    {
        name: '24 hours',
        value: 86400
    }
];
export const SSL_FREQUENCIES: IFrequency[] = [
    {
        name: '30 sec',
        value: 30
    },
    {
        name: '24 hours',
        value: 86400
    },
    {
        name: '5 days',
        value: 432000
    },
    {
        name: '7 days',
        value: 604800
    },
    {
        name: '15 days',
        value: 1.296e+6
    },
    {
        name: '30 days',
        value: 2.592e+6
    },
];