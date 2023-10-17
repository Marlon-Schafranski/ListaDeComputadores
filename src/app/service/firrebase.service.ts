import { Injectable, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Componentes } from 'src/app/entity/Componentes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirrebaseService {

  private PATH: string = "cadastro"
  constructor(private firestore: AngularFirestore) { }

  buscarTodos(){
    return this.firestore.collection(this.PATH).snapshotChanges()
  }

  cadastrar(componente: Componentes ){
    return this.firestore.collection(this.PATH)
    .add({categoria : componente.categoria,
          processador : componente.processador,
          placaVideo : componente.placaVideo,
          memoriaRam: componente.memoriaRam,
          armazenamento: componente.armazenamento})
  }
  editar(componente: Componentes, id: string){
    return this.firestore.collection(this.PATH).doc(id)
    .update({categoria : componente.categoria,
      processador : componente.processador,
      placaVideo : componente.placaVideo,
      memoriaRam: componente.memoriaRam,
      armazenamento: componente.armazenamento})
    }
      excluir(id: string){
        return this.firestore.collection(this.PATH).doc(id)
        .delete()
      }

      obterCadastro(): Observable<any[]> {
        return this.buscarTodos()


}
}
