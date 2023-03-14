interface PaginationProps {
    page: number;
    limit: number;
    total: number;
}
declare const paginationFn: ({ page, limit, total }: PaginationProps) => {
    page: number;
    limit: number;
    totalPage: number;
    totalResult: number;
};
export default paginationFn;
