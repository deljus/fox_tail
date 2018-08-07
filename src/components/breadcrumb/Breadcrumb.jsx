import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from '../connect';

const breadcrumbNameMap = {
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
  '/apps/2/detail': 'Detail',
};
const Home = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <BreadcrumbItem key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </BreadcrumbItem>
    );
  });
  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);
  return (
      <Breadcrumb>
        {breadcrumbItems}
      </Breadcrumb>
  );
});