"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const domain_exception_filter_1 = require("./presentation/exception-filters/domain-exception.filter");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    app.useGlobalFilters(new domain_exception_filter_1.DomainExceptionFilter());
    const port = process.env.PORT || 3000;
    await app.listen(port, '0.0.0.0');
    console.log(`Server is running at http://localhost:${port}/api/v1`);
}
bootstrap();
//# sourceMappingURL=main.js.map