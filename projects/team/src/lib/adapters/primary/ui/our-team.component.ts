import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';


@Component({ selector: 'lib-our-team', templateUrl: './our-team.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OurTeamComponent {
    team$: Observable<EmployeeDTO[]> = of ([
        {
            id: '1',
            name: 'Tom',
            imageUrl: 'https://cdn.galleries.smcloud.net/t/galleries/gf-Hpc9-Er8X-ZCkY_mysz-domowa-co-je-ile-zyje-i-jak-o-nia-dbac-1920x1080-nocrop.jpg',
            bio: 'Thomas jest brunetem, ma około 1,80 wzrostu oraz posiada duże brązowe oczy. W książce zwykł nosić na nogach sportowe buty.',
        },
        {id: '2',
        name: 'Newt',
        imageUrl: 'data:image/jpeg;base64,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',
        bio: 'Pojawił się w Labiryncie jako jeden z pierwszych. Był drugim dowodzącym w strefie. Dobry przyjaciel Thomasa i Minho, brat Sonyi.',


        },
        {id: '3',
        name: 'Alby',
        imageUrl: 'https://cont3.naekranie.pl/media%2Fcache%2Farticle-cover%2F2021%2F03%2F162045960_228545682393477_7033880169860749329_o%20%281%29_605602cf1d8ff.jpeg',
        bio: 'drugi przywódca Streferów, po śmierci Kamila. Według filmu jest pierwszym, który trafił do Strefy, musiał w niej przeżyć dokładnie miesiąc. Według książki trafił do Labiryntu z Minho i Newtem w trzydziestoosobowej grupie.',
}
    ])
}