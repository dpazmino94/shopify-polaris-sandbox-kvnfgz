import React, { useState } from "react";
import { Layout, Card, DataTable, Page, Pagination } from "@shopify/polaris";

export const ShopifyTable = ({ samples = { headings: [], rows: [[]] } }) => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const lastPage = Math.ceil(samples.rows.length / pageSize);

  const rowsPerPages = (page: number) =>
    samples.rows.slice((page - 1) * pageSize, page * pageSize);

  const columnContentTypes = samples.headings.map(x => "text");

  return (
    <React.Fragment>
      <Layout.Section>
        <Card title="商品データプレビュー">
          <DataTable
            hideScrollIndicator
            columnContentTypes={columnContentTypes}
            headings={samples.headings}
            rows={rowsPerPages(page)}
            footerContent={
              <div style={{ display: "inline-block" }}>
                <Pagination
                  hasPrevious={page > 1}
                  hasNext={page < lastPage}
                  label={`Showing ${page} of ${lastPage}`}
                  onPrevious={() => setPage(page - 1)}
                  onNext={() => setPage(page + 1)}
                />
              </div>
            }
          />
        </Card>
      </Layout.Section>
    </React.Fragment>
  );
};
