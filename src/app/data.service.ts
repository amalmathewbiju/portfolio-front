import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Fetch profile data
  getProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile`);
  }

  // Fetch projects data
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/projects`);
  }

  // Fetch contact information
  getContacts(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/contacts`);
  }

 
// Update profile data in the service
updateProfile(id: string, profileData: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/profile/${id}`, profileData);
}

  // Add a new project
  addProject(project: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/projects`, project);
  }

  /// Update an existing project
  updateProject(project: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/projects/${project._id}`, project);
  }

  

  // Delete a project
  deleteProject(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/projects/${id}`);
  }



// Add a new contact
addContact(contact: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/contacts`, contact);
}

/// Update an existing contact
updateContact(contact: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/contacts/${contact._id}`, contact);
}

// Delete a contact
deleteContact(_id: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/contacts/${_id}`);
}
getExperience(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/experience`);
}

// Add a new project
addExperience(experience: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/experience`, experience);
}
// Correct delete experience function
deleteExp(id: string): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/experience/${id}`);
}

// Correct update experience function
updateExperience(experience: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/experience/${experience._id}`, experience); 
}


getEducation(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/education`);
}

// Add a new project
addEducation(education: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/education`, education);
}
// Correct delete experience function
deleteEdu(id: string): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/education/${id}`);
}

// Correct update experience function
updateEducation(education: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/education/${education._id}`, education); // Use _id for MongoDB
}
getMContacts(): Observable<any> {
  return this.http.get<any[]>(`${this.apiUrl}/mcontacts`);
}
// Add a new contact
addMContact(mcontact: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/mcontacts`, mcontact);
}

/// Update an existing contact
updateMContact(mcontact: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/mcontacts/${mcontact._id}`, mcontact);
}

// Delete a contact
deleteMContact(_id: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/mcontacts/${_id}`);
}


}



