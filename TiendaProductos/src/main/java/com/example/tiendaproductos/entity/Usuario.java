package com.example.tiendaproductos.entity;

public class Usuario extends Persona{

    private Float saldo;


    public Usuario(Integer ID, String nombre, String apellido, String correo, Float saldo) {
        super(ID, nombre, apellido, correo);
        this.saldo = (float) 0;
    }



}
