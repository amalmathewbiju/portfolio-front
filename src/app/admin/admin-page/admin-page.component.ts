import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatFormFieldModule, MatInputModule, MatSelectModule,MatButtonModule,MatIconModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class  AdminPageComponent implements OnInit {
 
  profileForm: FormGroup = this.fb.group({});
  projectsForm: FormGroup = this.fb.group({});
  contactsForm: FormGroup = this.fb.group({});
  mcontactsForm: FormGroup = this.fb.group({});
  experienceForm: FormGroup = this.fb.group({});
  educationForm: FormGroup = this.fb.group({});

  
  projects: any[] = [];
  contacts:any[]=[];
  mcontacts:any[]=[];
  experience:any[] = [];
  education:any[]=[];
 
  selectedProjectId: number | null = null;
  selectedContactId:number | null = null;
  selectedMContactId:number | null = null;
  selectedExperienceId:number | null = null;
  selectedEducationId:number | null = null;
  currentProfileId: string | null = null;
  constructor(private fb: FormBuilder, private dataService: DataService,private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Initialize forms
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      bio: [''],
     
    });

    
    
    this.projectsForm = this.fb.group({
      title: [''],
      description: ['']
    });
    this.contactsForm =this.fb.group({
      type:[''],
      value:[''],
      link:['']
    });
    this.experienceForm = this.fb.group({
      duration: [''],
      role: [''],
      company: [''],
      description: ['']
    });
    this.educationForm = this.fb.group({
      duration: [''],
      course: [''],
      place: [''],
      description: ['']
    });
    this.mcontactsForm =this.fb.group({
      image:[''],
      name:[''],
      link:['']
    });
   
    this.loadProfile();
    this.loadProjects();
    this.loadContacts();
    this.loadMContacts();
    this.loadExperience()
    this.loadEducation()
  }




  loadProfile(): void {
    this.dataService.getProfile().subscribe(profile => {
      if (profile) {
        this.currentProfileId = profile._id; // Ensure _id is being set
        console.log('Profile ID:', this.currentProfileId); // Check if ID is correctly set
        this.profileForm.patchValue(profile);
      } else {
        console.log('No profile data found');
      }
    }, error => {
      console.error('Error fetching profile:', error);
    });
  }
  
  loadEducation():void{
    this.dataService.getEducation().subscribe(data =>{
      this.education = data
    })
   }
  
  loadExperience():void{
    this.dataService.getExperience().subscribe(data =>{
      this.experience = data
    })
   }
  // Load projects data
  loadProjects(): void {
    this.dataService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

 
  loadContacts(){
    this.dataService.getContacts().subscribe(data =>{
      this.contacts = data;
    })
  }

  loadMContacts(){
    this.dataService.getMContacts().subscribe(data =>{
      this.mcontacts = data;
    })
  }


  updateProfile(): void {
    if (this.profileForm.valid) {
      const profileData = this.profileForm.value;

      if (this.currentProfileId) {
        this.dataService.updateProfile(this.currentProfileId, profileData).subscribe(() => {
          alert('Profile updated successfully!');
          this.loadProfile(); // Reload the profile to get the latest data
        }, error => {
          alert('Error updating profile: ' + error.message);
        });
      } else {
        alert('Profile ID is missing. Unable to update.');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  }

  
  

//Add experience
addExperience():void{
  if(this.experienceForm.valid){
    this.dataService.addExperience(this.experienceForm.value).subscribe(() =>{
      alert('Experience added successfully!');
        this.experienceForm.reset();
        this.loadExperience();
    })
  }
}
editExperience(experience: any): void {
  this.experienceForm.patchValue(experience);
  this.selectedExperienceId = experience._id; // Use _id when working with MongoDB
}
// Correct usage of _id when updating experience
updateExperience(): void {
  if (this.selectedExperienceId !== null && this.experienceForm.valid) {
    const updatedExperience = { ...this.experienceForm.value, _id: this.selectedExperienceId };
    this.dataService.updateExperience(updatedExperience).subscribe(
      () => {
        alert('Experience updated successfully!');
        this.selectedExperienceId = null;
        this.experienceForm.reset();
        this.loadExperience(); // Reload experience list
      },
      (error) => {
        console.error('Error updating experience:', error);
        alert('Failed to update experience.');
      }
    );
  }
}


deleteExp(_id: string): void {
  this.dataService.deleteExp(_id).subscribe(
    () => {
      alert('Experience deleted successfully!');
      this.loadExperience(); // Reload the experience list after deletion
    },
    (error) => {
      console.error('Error deleting experience:', error);
      alert('Failed to delete experience.');
    }
  );
}

//add education

//Add experience
addEducation():void{
  if(this.educationForm.valid){
    this.dataService.addEducation(this.educationForm.value).subscribe(() =>{
      alert('Education added successfully!');
        this.educationForm.reset();
        this.loadEducation();
    })
  }
}
editEducation(education: any): void {
  this.educationForm.patchValue(education);
  this.selectedEducationId = education._id; // Use _id when working with MongoDB
}
// Correct usage of _id when updating experience
updateEducation(): void {
  if (this.selectedEducationId !== null && this.educationForm.valid) {
    const updatedEducation = { ...this.educationForm.value, _id: this.selectedEducationId };
    this.dataService.updateEducation(updatedEducation).subscribe(
      () => {
        alert('Education updated successfully!');
        this.selectedEducationId = null;
        this.educationForm.reset();
        this.loadEducation(); // Reload education list
      },
      (error) => {
        console.error('Error updating educa:', error);
        alert('Failed to update educa.');
      }
    );
  }
}


deleteEdu(_id: string): void {
  this.dataService.deleteEdu(_id).subscribe(
    () => {
      alert('education deleted successfully!');
      this.loadEducation(); // Reload the experience list after deletion
    },
    (error) => {
      console.error('Error deleting education:', error);
      alert('Failed to delete education.');
    }
  );
}


  // Add a new project

  
  addProject(): void {
    if (this.projectsForm.valid) {
      this.dataService.addProject(this.projectsForm.value).subscribe(() => {
        alert('Project added successfully!');
        this.projectsForm.reset();
        this.loadProjects();
      });
    }
  }

  // Edit a project
  editProject(project: any): void {
    this.projectsForm.patchValue(project);
    this.selectedProjectId = project._id;
  }

  updateProject(): void {
    if (this.selectedProjectId !== null && this.projectsForm.valid) {
      const updatedProject = { ...this.projectsForm.value, _id: this.selectedProjectId };
      this.dataService.updateProject(updatedProject).subscribe(() => {
        alert('Project updated successfully!');
        this.selectedProjectId = null;
        this.projectsForm.reset();
        this.loadProjects();
      });
    }
  }

  
  // Correct usage of _id when updating experience

  // Delete a project
  deleteProject(_id: string): void {
    this.dataService.deleteProject(_id).subscribe(() => {
      alert('Project deleted successfully!');
      this.loadProjects();
    });
  }



  // Add a new contact
  addContact(): void {
    if (this.contactsForm.valid) {
      this.dataService.addContact(this.contactsForm.value).subscribe(() => {
        alert('Contact added successfully!');
        this.contactsForm.reset();
        this.loadContacts();
      });
    }
  }

  // Edit a contact
  editContact(contact: any): void {
    this.contactsForm.patchValue(contact);
    this.selectedContactId = contact._id;
  }

  //update contact
  
  updateContact(): void {
    if (this.selectedContactId !== null && this.contactsForm.valid) {
      const updateContact = { ...this.contactsForm.value,_id: this.selectedContactId };
      this.dataService.updateContact(updateContact).subscribe(() => {
        alert('contact updated successfully!');
        this.selectedContactId = null;
        this.contactsForm.reset();
        this.loadContacts();
      });
    }
  }

  // Delete a contact
  deleteContact(_id: number): void {
    this.dataService.deleteContact(_id).subscribe(() => {
      alert('contact deleted successfully!');
      this.loadContacts();
    });
  }
  addMContact(): void {
    if (this.mcontactsForm.valid) {
      this.dataService.addMContact(this.mcontactsForm.value).subscribe(() => {
        alert('Contact added successfully!');
        this.mcontactsForm.reset();
        this.loadContacts();
      });
    }
  }

  // Edit a contact
  editMContact(mcontact: any): void {
    this.mcontactsForm.patchValue(mcontact);
    this.selectedMContactId = mcontact._id;
  }

  //update contact
  
  updateMContact(): void {
    if (this.selectedMContactId !== null && this.mcontactsForm.valid) {
      const updateMContact = { ...this.mcontactsForm.value,_id: this.selectedMContactId };
      this.dataService.updateMContact(updateMContact).subscribe(() => {
        alert('contact updated successfully!');
        this.selectedMContactId = null;
        this.mcontactsForm.reset();
        this.loadMContacts();
      });
    }
  }

  // Delete a contact
  deleteMContact(_id: number): void {
    this.dataService.deleteMContact(_id).subscribe(() => {
      alert('contact deleted successfully!');
      this.loadMContacts();
    });
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/admin/login']); // Redirect to login page
  }

}