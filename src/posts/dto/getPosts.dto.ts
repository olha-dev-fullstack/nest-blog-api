import { IntersectionType } from "@nestjs/swagger";
import { IsDate, IsOptional } from "class-validator";
import { PaginatioQueryDto } from "src/common/pagination/dto/paginationQuery.dto";

class GetPostsBaseDto {
    @IsDate()
    @IsOptional()
    startDate?: Date;

    @IsDate()
    @IsOptional()
    endDate?: Date
}

export class GetPostsDto extends IntersectionType(GetPostsBaseDto, PaginatioQueryDto) {}