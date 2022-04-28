import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ScheduleGroup } from './schedule-group.entity';

@Entity('schedules')
export class Schedules {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ type: 'varchar', nullable: true })
  day_week: string[];

  @Column({ nullable: true })
  time_start: string;

  @Column({ nullable: true })
  time_end: string;

  @ManyToOne(() => ScheduleGroup, (group) => group.id)
  @JoinColumn({ name: 'group_schedule' })
  group_schedule: ScheduleGroup;
}
