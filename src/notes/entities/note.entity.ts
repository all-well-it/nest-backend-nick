import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number; // auto incrementing int

  @Column()
  title: string;

  @Column()
  content: string;
}
