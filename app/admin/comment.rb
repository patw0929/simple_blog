ActiveAdmin.register Comment, as: "PostComment" do
  permit_params :content, :post_id, :author_id
end
