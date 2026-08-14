using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Microsoft.Web.WebView2.Core;

namespace WpfHybridApp
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            LoadPmsApp();
        }

        async Task LoadPmsApp()
        {
            await pmsWebView.EnsureCoreWebView2Async();
            pmsWebView.CoreWebView2.SetVirtualHostNameToFolderMapping(
                "siemens.com",
                $"{Environment.CurrentDirectory}//pms-app",
                CoreWebView2HostResourceAccessKind.DenyCors
                );

            pmsWebView.Source = new Uri("http://siemens.com/index.html");
        }
    }
}