import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  standalone: true,
  templateUrl: './certificaciones.component.html',
  styleUrl: './certificaciones.component.scss'
})
export class CertificacionesComponent implements AfterViewInit {


  @ViewChild('certificationsSection') certificationsSection!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.scrollToCertifications();
  }

  scrollToCertifications(): void {
    if (this.certificationsSection) {
      this.certificationsSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }



  certifications = [
    {
      Name: 'HTB ACADEMY',
      AchievementUrl: 'https://academy.hackthebox.com/achievement/249178/49',
      ImageUrl: 'https://academy.hackthebox.com/storage/modules/49/logo.png',
      Description: 'Windows Fundamentals'
    },
    {
      Name: 'Web CAP',
      AchievementUrl: 'https://www.hackthebox.com/achievement/machine/401626/351',
      ImageUrl: 'https://labs.hackthebox.com/storage/avatars/70ea3357a2d090af11a0953ec8717e90.png',
      Description: 'Preview course on web Cap.'
    },
    {
      Name: 'Achievements',
      AchievementUrl: 'https://academy.hackthebox.com/achievement/249178/35',
      ImageUrl: 'https://labs.hackthebox.com/storage/avatars/3ec233f1bf70b096a66f8a452e7cd52f.png',
      Description: 'Achievement badge.'
    },
    {
      Name: 'Machine Miau',
      AchievementUrl: 'https://www.hackthebox.com/achievement/machine/401626/394',
      ImageUrl: 'https://labs.hackthebox.com/storage/avatars/61b5837dfdfe1fb1ca3750cf2712da44.png',
      Description: 'Achievement badge Miau.'
    },
    {
      Name: 'Achievement 3',
      AchievementUrl: 'https://www.hackthebox.com/achievement/machine/401626/393',
      ImageUrl: 'https://labs.hackthebox.com/storage/avatars/b64f85071e626e4cc2272d54332e4131.png',
      Description: 'Achievement badge for a machine.'
    },
    {
      Name: 'Dance',
      AchievementUrl: 'https://www.hackthebox.com/achievement/machine/401626/395',
      ImageUrl: 'https://labs.hackthebox.com/storage/avatars/ce52eadd09ff5a28a1eea8c65d6683a9.png',
      Description: 'Achievement badge Dance.'
    },
    {
      Name: 'Achievement 5',
      AchievementUrl: 'https://www.hackthebox.com/achievement/machine/401626/472',
      ImageUrl: 'https://labs.hackthebox.com/storage/avatars/cdf77651ab0a4eca65acd5cf388b4c66.png',
      Description: 'Achievement badge for a machine.'
    },
    {
      Name: 'Achievement 6',
      AchievementUrl: 'https://www.hackthebox.com/achievement/machine/401626/631',
      ImageUrl: 'https://labs.hackthebox.com/storage/avatars/b8f3d660af2d3ed0929eb119e33526cf.png',
      Description: 'Achievement badge for a machine.'
    },
    {
      Name: 'Editorial',
      AchievementUrl: 'https://www.hackthebox.com/achievement/machine/401626/608',
      ImageUrl: 'https://labs.hackthebox.com/storage/avatars/a466db5ce4f7aaea98f588d1cb71a0aa.png',
      Description: 'Achievement badge Editorial.'
    },
    {
      Name: 'Web Requests Course',
      AchievementUrl: 'https://academy.hackthebox.com/achievement/249178/35',
      ImageUrl: 'https://academy.hackthebox.com/storage/modules/35/logo.png',
      Description: 'Preview course on web requests.'
    },
    {
      Name: 'Web Jvascript',
      AchievementUrl: 'https://academy.hackthebox.com/achievement/249178/41',
      ImageUrl: 'https://academy.hackthebox.com/storage/modules/41/logo.png',
      Description: 'Preview course Deobfuscation.'
    }
  ];
}
