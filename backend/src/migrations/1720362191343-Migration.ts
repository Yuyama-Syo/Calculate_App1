import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1720362191343 implements MigrationInterface {
    name = 'Migration1720362191343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`borrower_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`payment_id\` int NULL, \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`payment_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`payment\` int NOT NULL, \`date\` datetime NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`borrower_entity\` ADD CONSTRAINT \`FK_8e65ee4d6fc5e3a789feb9dc29f\` FOREIGN KEY (\`payment_id\`) REFERENCES \`payment_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`borrower_entity\` ADD CONSTRAINT \`FK_e8bb7063249dcad4c66999336cb\` FOREIGN KEY (\`user_id\`) REFERENCES \`user_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`payment_entity\` ADD CONSTRAINT \`FK_5fd2756650ddadbc8c96be6106a\` FOREIGN KEY (\`userId\`) REFERENCES \`user_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`payment_entity\` DROP FOREIGN KEY \`FK_5fd2756650ddadbc8c96be6106a\``);
        await queryRunner.query(`ALTER TABLE \`borrower_entity\` DROP FOREIGN KEY \`FK_e8bb7063249dcad4c66999336cb\``);
        await queryRunner.query(`ALTER TABLE \`borrower_entity\` DROP FOREIGN KEY \`FK_8e65ee4d6fc5e3a789feb9dc29f\``);
        await queryRunner.query(`DROP TABLE \`payment_entity\``);
        await queryRunner.query(`DROP TABLE \`user_entity\``);
        await queryRunner.query(`DROP TABLE \`borrower_entity\``);
    }

}
