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
                            start_time: "2026-08-12T20:00:00Z",
                            end_time: "2026-08-12T22:00:00Z",
                            event_type: "Aula",
                            course_info: "Programação em JavaScript",
                            info: null
                        }
                    ]
                });
        }
    }),
];
