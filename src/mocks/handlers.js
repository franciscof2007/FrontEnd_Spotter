import {http,HttpResponse} from 'msw';

export const handlers=[
    http.get('*/rooms/', ({request}) => { 
        const url= new URL(request.url);
        const scenario = url.searchParams.get('mock_scenario');

        switch(scenario){
            case'vazio':
                return HttpResponse.json({
                    count: 0,
                    next: null,
                    previous: null,
                    results: []
                });
            case 'erro_404':
                return new HttpResponse(null, {status:404});
            case 'erro_500':
                return new HttpResponse(null, {status:500});
            default:
                // Cenário "normal": mistura de status
                return HttpResponse.json({
                    count: 4,
                    next: null,
                    previous: null,
                    results: [
                        {
                            fenix_id: "1001",
                            name: "F1",
                            building_name: "Pavilhão de Informática I",
                            floor: "0",
                            campus: "alameda",
                            status: "LIVRE_AGORA",
                            available_from: "2026-08-12T07:00:00Z",
                            available_until: "2026-08-12T19:00:00Z"
                        },
                        {
                            fenix_id: "1002",
                            name: "F2",
                            building_name: "Pavilhão de Informática I",
                            floor: "0",
                            campus: "alameda",
                            status: "LIVRE_EM_BREVE",
                            available_from: "2026-08-12T15:00:00Z",
                            available_until: "2026-08-12T19:00:00Z"
                        },
                        {
                            fenix_id: "1003",
                            name: "F3",
                            building_name: "Pavilhão de Informática I",
                            floor: "1",
                            campus: "alameda",
                            status: "OCUPADO",
                            available_from: "2026-08-12T07:00:00Z",
                            available_until: "2026-08-12T19:00:00Z"
                        },
                        {
                            fenix_id: "1004",
                            name: "F4",
                            building_name: "Pavilhão de Informática III",
                            floor: "0",
                            campus: "alameda",
                            status: "INCERTO",
                            available_from: null,
                            available_until: null
                        }
                    ]
                });
        }
    }),
    http.get('*/rooms/:id/', ({ request, params }) => {
        const url = new URL(request.url);
        const scenario = url.searchParams.get('mock_scenario');
        const { id } = params;

        switch (scenario) {
            case 'erro_404':
                return new HttpResponse(null, { status: 404 });

            case 'erro_500':
                return new HttpResponse(null, { status: 500 });

            case 'dados_incompletos':
                return HttpResponse.json({
                    fenix_id: id,
                    name: "F1",
                    building_name: "Pavilhão de Informática I",
                    floor: "0",
                    campus: "alameda",
                    description: null,
                    normal_capacity: null,
                    status: "INCERTO",
                    available_from: null,
                    available_until: null,
                    last_updated_at: null,
                    events: []
                });

            default:
                return HttpResponse.json({
                    fenix_id: id,
                    name: "F1",
                    building_name: "Pavilhão de Informática I",
                    floor: "0",
                    campus: "alameda",
                    description: "Sala de aulas",
                    normal_capacity: 40,
                    status: "LIVRE_AGORA",
                    available_from: "2026-08-12T07:00:00Z",
                    available_until: "2026-08-12T19:00:00Z",
                    last_updated_at: "2026-08-12T10:00:00Z",
                    events: [
                        {
                                    "start_time": "22:00:00",
                                    "end_time": "23:30:00",
                                    "event_type": "Aula de computaria",
                                    "course_info": "Curso Eng. 1",
                                    "info": "Gerado para fins de teste"
                                },
                                {
                                    "start_time": "23:30:00",
                                    "end_time": "23:02:00",
                                    "event_type": "AULA",
                                    "course_info": "Curso Eng. 5",
                                    "info": "Gerado para fins de teste"
                                },
                                {
                                    "start_time": "18:00:00",
                                    "end_time": "18:30:00",
                                    "event_type": "AULA",
                                    "course_info": "Curso Eng. 3",
                                    "info": "Gerado para fins de teste"
                                },
                                {   
                                    "start_time": "19:00:00",
                                    "end_time": "19:30:00",
                                    "event_type": "REUNIAO",
                                    "course_info": "Curso Eng. 3",
                                    "info": "Gerado para fins de teste"
                                }
                    ]
                });
        }
    }),
    http.get('*/rooms/:id/reports/', ({ request, params }) => {
        const url = new URL(request.url);
        const scenario = url.searchParams.get('mock_scenario');
        const { id } = params;

        switch (scenario) {
            case 'vazio':
                return HttpResponse.json({
                    count: 0,
                    next: null,
                    previous: null,
                    results: []
                });
            default:
                // Geramos uma data atual e subtraímos alguns minutos para ficar realista
                const now = new Date();
                const minus3Min = new Date(now.getTime() - 3 * 60000).toISOString();
                const minus0Min = new Date(now.getTime() - 0 * 60000).toISOString();
                const plus1Hour = new Date(now.getTime() + 60 * 60000).toISOString();

                return HttpResponse.json({
                    count: 13,
                    next: null,
                    previous: null,
                    results: [
                        {
                            id: 1024,
                            occupancy: "MANY_FREE_TABLES",
                            noise: "QUIET",
                            plugs: "YES",
                            created_at: minus0Min,
                            expires_at: plus1Hour
                        },
                        {
                            id: 1025,
                            occupancy: "SOME_FREE_TABLES",
                            noise: "QUIET",
                            plugs: "YES",
                            created_at: minus3Min,
                            expires_at: plus1Hour
                        },
                        {
                            id: 1026,
                            occupancy: "SINGLE_FREE_SEATS",
                            noise: "LOUD",
                            plugs: "NO",
                            created_at: minus3Min,
                            expires_at: plus1Hour
                        },
                        {
                            id: 1027,
                            occupancy: "ALMOST_FULL",
                            noise: "NORMAL",
                            plugs: "YES",
                            created_at: minus3Min,
                            expires_at: plus1Hour
                        },
                        {
                            id: 1028,
                            occupancy: "FULL",
                            noise: "QUIET",
                            plugs: "YES",
                            created_at: minus3Min,
                            expires_at: plus1Hour
                        },
                        {
                            id: 1029,
                            occupancy: "UNAVAILABLE",
                            noise: "QUIET",
                            plugs: "UNKNOWN",
                            created_at: minus3Min,
                            expires_at: plus1Hour
                        },
                    ]
                });
        }
    }),
];
