import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmModule } from './film/film.module';
import { ActorModule } from './actor/actor.module';
// import { StaffModule } from './staff/staff.module';
// import { RentalModule } from './rental/rental.module';
// import { PaymentModule } from './payment/payment.module';
// import { InventoryModule } from './inventory/inventory.module';
// import { FilmCategoryModule } from './film-category/film-category.module';
// import { FilmActorModule } from './film-actor/film-actor.module';
// import { CustomerModule } from './customer/customer.module';
import { CountryModule } from './country/country.module';
import { CityModule } from './city/city.module';
import { CategoryModule } from './category/category.module';
import { AddressModule } from './address/address.module';
// import { LanguageModule } from './language/language.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        //synchronize: true,
        autoLoadEntities: true
      }),
      inject: [ConfigService],
    }),
    FilmModule,
    ActorModule,
    HomeModule,
    AddressModule,
    CategoryModule,
    CityModule,
    CountryModule,
    // CustomerModule,
    // FilmActorModule,
    // FilmCategoryModule,
    // InventoryModule,
    // PaymentModule,
    // RentalModule,
    // StaffModule,
    // StoreModule,
    // LanguageModule
  ]
})
export class AppModule { }
