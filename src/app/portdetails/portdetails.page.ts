import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


import { ServingListService } from './../serving-list.service';

@Component({
  selector: 'app-portdetails',
  templateUrl: './portdetails.page.html',
  styleUrls: ['./portdetails.page.scss'],
})
export class PortdetailsPage implements OnInit {

  constructor(private route: ActivatedRoute,   
     private alertController: AlertController,
     private Servlist: ServingListService,
     private router:Router)  {}


 
  students = [
    { id: '3198/FBAS/BSSE/F16', name: 'Kabir Singh' },
    { id: '3199/FBAS/BSSE/F16', name: 'The Surgical Strike' },
    { id: '3200/FBAS/BSSE/F16', name: 'Bharat' },
    { id: '3201FBAS/BSSE/F16', name: '	Mission Mangal' },
    { id: '3204/FBAS/BSSE/F16', name: 'Gully Boy' },
    { id: '3217FBAS/BSSE/F16', name: 'Gully Boy SHAHZAIB' },
    { id: '3222/FBAS/BSSE/F16', name: '	Total Dhamaal' },
    { id: '3223/FBAS/BSSE/F16', name: 'Chhichhore' },
    { id: '3225/FBAS/BSSE/F16', name: 'Super 30' },
    { id: '3227-FBAS/BSSE/F16', name: 'Super 30 (CR)' },
    { id: '3238-FBAS/BSSE/F16', name: 'JAWAD Super 30' },
    { id: '3240/FBAS/BSSE/F16', name: 'USAMA Chhichhore' },
    { id: '3251/FBAS/BSSE/F16', name: 'Chhichhore IDREES' },
    { id: '3279/FBAS/BSSE/F16', name: '	Kesari MIRZA' },
    { id: '3280/FBAS/BSSE/F16', name: ' RAZA 	Kesari' },
    { id: '3281FBAS/BSSE/F16', name: 'Battalion 609' },
    { id: '3282-FBAS/BSSE/F16', name: 'Battalion 608' },
    { id: '3285/FBAS/BSSE/F16', name: 'Battalion' },
    { id: '3295/FBAS/BSSE/F16', name: 'Batt 609' },
    { id: '3296/FBAS/BSSE/F16', name: 'alion 609' },
    { id: '3299/FBAS/BSSE/F16', name: 'The Accidental' },
    { id: '3305/FBAS/BSSE/F16', name: 'The Accidental Prime Minister' },
    { id: '3309/FBAS/BSSE/F16', name: 'Prime Minister' },
    { id: '3310/FBAS/BSSE/F16', name: 'ccidental Prime' },
    { id: '3321/FBAS/BSSE/F16', name: 'Muhammad Osama Gill' },
    { id: '3326/FBAS/BSSE/F16', name: 'Why Cheat India' },
    { id: '3327FBAS/BSSE/F16', name: 'SP Chauhan' },
    { id: '3332/FBAS/BSSE/F16', name: 'Fraud Saiyaan' },
    { id: '3333-FBAS/BSSE/F16', name: 'Soni' },
    { id: '3334-FBAS/BSSE/F16', name: 'Martyr Who Never Died' },
    { id: '3335-FBAS/BSSE/F16', name: 'Bombairiya' },
    { id: '3337/FBAS/BSSE/F16', name: 'Ek Ladki Ko Dekha Toh Aisa Laga' },
    { id: '3347-FBAS/BSSE/F16', name: 'Ek Ladki' },
    { id: '3349/FBAS/BSSE/F16', name: 'Aisa Laga' },
    { id: '3350/FBAS/BSSE/F16', name: 'Amavas' },
    { id: '3352-FBAS/BSSE/F16', name: 'Gully Boy 3' },
    { id: '3353-FBAS/BSSE/F16', name: 'Hum Chaar' },
    { id: '3354/FBAS/BSSE/F16', name: 'Total Dhamaal 3' },
    { id: '3356-FBAS/BSSE/F16', name: 'Luka Chuppi' },
    { id: '3357/FBAS/BSSE/F16', name: 'Sonchiriya' },
    { id: '3359/FBAS/BSSE/F16', name: 'Badla' },
    { id: '3361/FBAS/BSSE/F16', name: 'Hamid' },
    { id: '3362-FBAS/BSSE/F16', name: 'Photograph' },
    { id: '3363/FBAS/BSSE/F16', name: 'MMilan Talkies' },
    { id: '3365/FBAS/BSSE/F16', name: 'Risknamaa' },
    { id: '3366/FBAS/BSSE/F16', name: 'Mere Pyare Prime Minister ' },
    { id: '3368/FBAS/BSSE/F16', name: 'Mard Ko Dard Nahi Hota' },
    { id: '3372/FBAS/BSSE/F16', name: 'Ram Ki Janmbhoomi' },
    { id: '3373/FBAS/BSSE/F16', name: 'Notebook' },
    { id: '3374/FBAS/BSSE/F16', name: 'Junglee' },
    { id: '3375/FBAS/BSSE/F16', name: 'Romeo Akbar Walter' },
    { id: '3376/FBAS/BSSE/F16', name: 'The Tashkent Files' },
    { id: '3377/FBAS/BSSE/F16', name: 'Kalank' },
    { id: '3343/FBAS/BSSE/F16', name: 'Blank' }
  ];
  singleStudent;
   ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('studentid');

      this.singleStudent = this.students.find(obj => {
        return obj.id.includes(val);
      });
    });
  }
  
  async deleteStudent() {

    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singleStudent.name}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.Servlist.deleteAStudent(this.singleStudent.id);
            this.router.navigateByUrl('/portfolio');
          }
        }
      ]
    });

    alert.present();


  }
} 
