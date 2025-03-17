import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {


  proyectosData = [
    { categoria: 'Web API', titulo: 'API de Usuarios', descripcion: 'Gestor de usuarios con autenticación JWT', descripcionBreve: 'API para gestionar usuarios', icono: 'fas fa-server' },
    { categoria: 'Web API', titulo: 'API de Productos', descripcion: 'CRUD completo para productos', descripcionBreve: 'API para gestionar productos', icono: 'fas fa-database' },
    { categoria: 'Web API', titulo: 'API de Clima', descripcion: 'Consulta datos meteorológicos en tiempo real', descripcionBreve: 'API para consultar el clima', icono: 'fas fa-cloud' },
    { categoria: 'Backend', titulo: 'Sistema de Facturación', descripcion: 'Generación de facturas automática', descripcionBreve: 'Sistema para facturación automatizada', icono: 'fas fa-file-invoice' },
    { categoria: 'Backend', titulo: 'Autenticación OAuth', descripcion: 'Login con Google y Facebook', descripcionBreve: 'Autenticación mediante OAuth', icono: 'fas fa-user-lock' },
    { categoria: 'Backend', titulo: 'Notificaciones Push', descripcion: 'Envío de alertas a dispositivos móviles', descripcionBreve: 'Sistema de notificaciones push', icono: 'fas fa-bell' },
    { categoria: 'Ciberseguridad', titulo: 'Escáner de Puertos', descripcion: 'Herramienta de auditoría de red', descripcionBreve: 'Escáner para auditoría de puertos', icono: 'fas fa-network-wired' },
    { categoria: 'Ciberseguridad', titulo: 'Password Manager', descripcion: 'Gestor seguro de contraseñas', descripcionBreve: 'Gestor de contraseñas seguro', icono: 'fas fa-key' },
    { categoria: 'Ciberseguridad', titulo: 'Monitor de Seguridad', descripcion: 'Análisis de vulnerabilidades en tiempo real', descripcionBreve: 'Herramienta de monitoreo de seguridad', icono: 'fas fa-shield-alt' },
    { categoria: 'Especial', titulo: 'Pokedex App', descripcion: 'Consumo de API de Pokémon con interfaz amigable', descripcionBreve: 'App para consultar Pokémon', icono: 'fas fa-dragon' }
  ];


  experiencias = [
    {
      titulo: 'Desarrollador Web Full Stack',
      empresa: 'Soft',
      fecha: '2024 - 2024',
      icono: 'fas fa-laptop-code',
    },
    {
      titulo: 'Desarrollador de Software',
      empresa: 'Dium',
      fecha: '2020 - 2021',
      icono: 'fas fa-file-invoice',
    },
    {
      titulo: 'Desarrollador de Backend',
      empresa: 'DataDevs',
      fecha: '2024 - 2025',
      icono: 'fas fa-user-lock',
    },
    // Añadir más experiencias según sea necesario
  ];


  getDelay(index: number): string {
    const delay = 0.3 + index * 0.2;
    return `${delay}s`;
  }
}
  


